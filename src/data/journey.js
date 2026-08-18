// EDIT ME: the learning-path stages (rendered as a git-log-style graph)
// and the intended infrastructure flow (rendered as a diagram).
// `status` accepts: 'done' | 'active' | 'planned' — purely presentational.

export const journeyStages = [
  {
    stage: 'Code',
    detail: 'Writing modular application services optimized for containerized environments.',
    status: 'done',
  },
  {
    stage: 'Git & Workflow',
    detail: 'Managing feature branching, code reviews, and structured release tags.',
    status: 'done',
  },
  {
    stage: 'Docker',
    detail: 'Crafting multi-stage container builds for optimized runtime images.',
    status: 'done',
  },
  {
    stage: 'CI/CD Pipelines',
    detail: 'Automating build, test, and container registry publishing with GitHub Actions.',
    status: 'done',
  },
  {
    stage: 'Kubernetes',
    detail: 'Configuring Deployments, Services, ConfigMaps, and Secrets for cluster management.',
    status: 'done',
  },
  {
    stage: 'Ingress & Traffic',
    detail: 'Configuring Ingress resources and reverse proxies for routing and TLS terminating.',
    status: 'done',
  },
  {
    stage: 'Monitoring',
    detail: 'Setting up observability patterns for logging, metrics, and application health checks.',
    status: 'done',
  },
];

export const journeyNote =
  'A representative end-to-end DevOps pipeline demonstrating automated build, container orchestration, ingress configuration, and observability.'

export const architectureFlow = [
  'Developer',
  'GitHub',
  'GitHub Actions',
  'Docker Image',
  'Container Registry',
  'Kubernetes Cluster',
  'Live Service',
]

export const architectureNote =
  'Automated delivery flow: code commits trigger CI/CD pipelines to build container images, publish to the registry, and update cluster deployments.'