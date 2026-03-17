# Netflix-Style-home-page-DevOps-Project
A Netflix-style frontend app with a local DevOps workflow using Node.js, Docker, GitHub Actions, and Kubernetes.


This is a local-first DevOps portfolio project based on a Netflix-style frontend application. The goal is not just to build a UI, but to learn the full DevOps workflow around a modern app: how code is built, tested, containerized, automated in CI, and deployed to Kubernetes.

In this project, the application is a simple Netflix-style static web app that is built with Node.js scripts, packaged into a Docker image, and served through Nginx. A GitHub Actions pipeline automates the main CI steps such as install, test, build, and Docker image creation. The app can then be deployed to a local Kubernetes cluster using manifests for a Deployment, Service, and optional Ingress.

This project is designed for learning DevOps step by step without cloud complexity. Everything runs locally, so you can focus on understanding the pipeline, containers, and Kubernetes before moving to AWS or other cloud platforms.
