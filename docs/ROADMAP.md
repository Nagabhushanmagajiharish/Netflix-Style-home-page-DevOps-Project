# Roadmap (Local Only, GitHub Actions, No GitOps)

This roadmap assumes you are new to DevOps but already know basic Linux, Git, and a little Docker. The order is intentional: you will always have something working before you add the next layer.

## Phase 1: Understand the App

Goal: Know what you are deploying and how it is built.

- Read `app/public/index.html` and `app/public/styles.css`.
- Learn the idea of a build step that outputs `app/dist/`.
- Replace the static HTML later with a real Netflix clone UI.

What you should learn in this phase:

- Static web apps
- Build output folders
- Environment variables for API keys (TMDB)

## Phase 2: Containerize

Goal: Build a reproducible container image.

- Read `Dockerfile`.
- Learn multi-stage builds.
- Learn how Nginx serves a static frontend.

What you should learn:

- Docker images, tags, layers
- `COPY` vs `ADD`, and `WORKDIR`
- `EXPOSE` and container ports

## Phase 3: CI with GitHub Actions

Goal: Every push runs tests and builds the image.

- Read `.github/workflows/ci.yml`.
- Run the same commands locally (`npm install`, `npm test`, `npm run build`).

What you should learn:

- Workflow triggers
- Jobs, steps, and cache
- Secrets and environment variables

## Phase 4: Local Kubernetes Deployment

Goal: Learn the Kubernetes objects you will use in production.

- Read `k8s/namespace.yaml`.
- Read `k8s/deployment.yaml`.
- Read `k8s/service.yaml`.

What you should learn:

- Pods, Deployments, ReplicaSets
- Services, labels, selectors
- NodePort access

## Phase 5: Observability (Optional Next Step)

Goal: See CPU, memory, and request metrics.

- Install Prometheus and Grafana in your local cluster.
- Add dashboards for Nginx and node-exporter.

What you should learn:

- Metrics and exporters
- Dashboards and alerts

## Phase 6: Security (Optional Next Step)

Goal: Add simple security gates in CI.

- Add Trivy image scanning in GitHub Actions.
- Add dependency scanning (npm audit or OWASP dependency-check).

What you should learn:

- SAST vs image scanning
- Failing pipelines on vulnerabilities

## Phase 7: Terraform (Optional Later)

Goal: Turn local into cloud using infrastructure as code.

- Only do this after the local path is solid.
- You can later add AWS and EKS.