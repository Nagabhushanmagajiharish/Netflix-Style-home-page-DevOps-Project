# Netflix-Style DevOps Project (Local Only)

This repo is a local-first, GitHub Actions-based DevOps learning project. It ships a simple Netflix-style static UI, a Docker image, local Kubernetes manifests, and a CI pipeline you can extend.

## Quick Start (Local)

1. Install Node.js 20+ and Docker Desktop.
2. Run the app locally:
   - `cd app`
   - `npm install`
   - `npm run build`
   - Open `app/dist/index.html` in a browser.
3. Build and run the container:
   - `docker build -t netflix-local:latest .`
   - `docker run -p 8080:80 netflix-local:latest`
   - Open http://localhost:8080

## Local Kubernetes (Optional)

1. Start a local cluster (minikube or kind).
2. Apply manifests:
   - `kubectl apply -f k8s/namespace.yaml`
   - `kubectl apply -f k8s/deployment.yaml`
   - `kubectl apply -f k8s/service.yaml`
3. Access the service using NodePort.

## Repo Structure

- `app/` - The frontend app and build scripts.
- `Dockerfile` - Builds the app and serves it with Nginx.
- `.github/workflows/ci.yml` - GitHub Actions pipeline (local-only focus).
- `k8s/` - Local Kubernetes manifests.
- `docs/` - Deep-dive learning path and notes.

## How To Extend

- Replace `app/public/index.html` with a real Netflix clone UI.
- Add real tests in `app/` and update `npm test`.
- Add Trivy and SonarQube stages to `ci.yml` when ready.
- Add Ingress after installing ingress-nginx in your local cluster.

## Environment Variables

Copy `.env.example` to `.env` and add a real TMDB key when you build the real clone.