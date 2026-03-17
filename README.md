# Netflix-Style Home Page DevOps Project

A local-first Netflix-style frontend app with a DevOps workflow built around Node.js, Docker, GitHub Actions, and Kubernetes.

This repository is designed as a beginner-friendly DevOps portfolio project. It includes a simple Netflix-style static UI, a reproducible container build, a local Kubernetes deployment, and a CI pipeline you can grow over time.

## What You Learn

- How a frontend app moves from source code to a built artifact
- How Docker packages the app for consistent local deployment
- How GitHub Actions automates install, test, build, and image creation
- How Kubernetes runs and exposes the application locally

## Quick Start

1. Install Node.js 20+ and Docker Desktop.
2. Build the app locally:
   - `cd app`
   - `npm install`
   - `npm run build`
3. Open `app/dist/index.html` in your browser.

## Run With Docker

1. Move to the project root.
2. Build the image:
   - `docker build -t netflix-local:latest .`
3. Run the container:
   - `docker run -p 8080:80 netflix-local:latest`
4. Open `http://localhost:8080`

## Run On Local Kubernetes

1. Start a local cluster with `minikube` or `kind`.
2. Apply the manifests:
   - `kubectl apply -f k8s/namespace.yaml`
   - `kubectl apply -f k8s/deployment.yaml`
   - `kubectl apply -f k8s/service.yaml`
3. Access the app on `http://localhost:30080`

## Project Structure

- `app/` contains the frontend source and build scripts
- `.github/workflows/ci.yml` contains the GitHub Actions pipeline
- `k8s/` contains the Kubernetes manifests
- `docs/` contains the learning roadmap and notes

## Next Steps

- Replace the demo UI with your full Netflix clone
- Add real frontend tests
- Enable Trivy or other security scanning in CI
- Add Prometheus and Grafana for local monitoring
