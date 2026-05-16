# ADR 0001: Use OIDC Federation for GitHub Actions AWS Authentication

## Status
Accepted

## Context
The GitHub Actions deploy pipeline needs to push built assets to S3 and invalidate the CloudFront distribution on each Release. This requires authenticating to AWS from CI. The two realistic options are:

- **IAM access keys** stored as long-lived GitHub secrets (`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY`)
- **OIDC federation** where GitHub Actions exchanges a short-lived OIDC token for temporary AWS credentials per job run

## Decision
Use OIDC federation. AWS is configured as a trusted identity provider for GitHub Actions, and an IAM role is assumed per job run using short-lived tokens. No long-lived credentials are stored anywhere.

## Consequences
- No credentials to rotate, audit, or accidentally expose in logs or forks
- One-time setup: create an OIDC identity provider in AWS IAM and an IAM role with the `github-actions` trust policy scoped to this repository
- The IAM role needs `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the S3 bucket, and `cloudfront:CreateInvalidation` on the distribution
- Pipeline uses `aws-actions/configure-aws-credentials` with `role-to-assume` rather than static key inputs

## Implementation

- IAM role: `arn:aws:iam::600893692809:role/github-actions-personal-website`
- CloudFormation template: `infrastructure/github-actions-oidc.yml`
- Role ARN stored as `AWS_ROLE_ARN` in GitHub repository secrets
