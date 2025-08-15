import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const GithubActionDoc = () => {
    const [copiedCode, setCopiedCode] = useState(null);

    const handleCopy = async (code, idx) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(idx);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    // SINGLE array for ALL content
    const githubActionsData = [
        {
            type: 'install',
            title: '📦 Installation',
            bg: 'linear-gradient(135deg, #fff9e6, #fff3cc)',
            textColor: 'text-warning',
            note:
                'No extra package is required—GitHub Actions is built into GitHub. Workflows live in `.github/workflows/*.yml`.',
            code: `# GitHub Actions are configured via YAML workflows — no npm install required`
        },
        {
            type: 'workflow',
            name: 'Node.js CI Workflow',
            trigger: '[push, pull_request]',
            purpose: 'Run tests across multiple Node.js versions on commit or pull request.',
            uses: `- uses: actions/setup-node@v3\n  with:\n    node-version: 18`,
            code: `name: Node.js CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix: { node-version: [14, 16, 18] }
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm install
      - run: npm test`,
            icon: '⚙️',
            color: 'primary'
        },
        {
            type: 'workflow',
            name: 'Deploy to GitHub Pages',
            trigger: 'push (main)',
            purpose: 'Build and deploy your app to GitHub Pages on push to main branch.',
            uses: `- uses: peaceiris/actions-gh-pages@v3\n  with:\n    github_token: \${{ secrets.GITHUB_TOKEN }}\n    publish_dir: ./dist`,
            code: `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`,
            icon: '🚀',
            color: 'success'
        },
        {
            type: 'workflow',
            name: 'Lint & Format Check',
            trigger: '[push]',
            purpose: 'Run ESLint and Prettier on push to enforce code quality.',
            uses: `- run: npm run lint`,
            code: `name: Lint & Format

on: [push]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run lint
      - run: npm run format`,
            icon: '🧹',
            color: 'info'
        },
        {
            type: 'workflow',
            name: 'Run Unit Tests on PR',
            trigger: '[pull_request]',
            purpose: 'Automatically run unit tests for every pull request.',
            uses: `- run: npm test`,
            code: `name: Unit Tests

on:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test`,
            icon: '🧪',
            color: 'danger'
        },
        {
            type: 'workflow',
            name: 'Docker Build & Push',
            trigger: 'push (main)',
            purpose: 'Build and push Docker image to Docker Hub.',
            uses: `- uses: docker/build-push-action@v3`,
            code: `name: Docker Build

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - uses: docker/login-action@v2
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
      - uses: docker/build-push-action@v3
        with:
          push: true
          tags: username/repo:latest`,
            icon: '🐳',
            color: 'secondary'
        },
        {
            type: 'workflow',
            name: 'CodeQL Security Scan',
            trigger: '[push, pull_request]',
            purpose: 'Run GitHub CodeQL analysis to detect security vulnerabilities.',
            uses: `- uses: github/codeql-action/init@v2\n- uses: github/codeql-action/analyze@v2`,
            code: `name: CodeQL

on: [push, pull_request]

jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write
    steps:
      - uses: actions/checkout@v3
      - uses: github/codeql-action/init@v2
        with:
          languages: javascript
      - uses: github/codeql-action/analyze@v2`,
            icon: '🔍',
            color: 'dark'
        },
        {
            type: 'workflow',
            name: 'Slack Notification',
            trigger: '[workflow_run]',
            purpose: 'Send build notifications to Slack.',
            uses: `- uses: slackapi/slack-github-action@v1`,
            code: `name: Slack Notification

on:
  workflow_run:
    workflows: ["Node.js CI"]
    types:
      - completed

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: slackapi/slack-github-action@v1
        with:
          payload: '{"text":"✅ CI Build completed successfully"}'
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK_URL }}`,
            icon: '💬',
            color: 'info'
        },
        {
            type: 'workflow',
            name: 'Deploy to AWS S3',
            trigger: 'push (main)',
            purpose: 'Upload build files to AWS S3 bucket.',
            uses: `- uses: aws-actions/configure-aws-credentials@v2\n- uses: jakejarvis/s3-sync-action@master`,
            code: `name: Deploy to AWS S3

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --delete
        env:
          AWS_S3_BUCKET: my-bucket-name
          SOURCE_DIR: ./dist`,
            icon: '☁️',
            color: 'warning'
        },
        {
            type: 'workflow',
            name: 'Run Cypress E2E Tests',
            trigger: '[push]',
            purpose: 'Execute end-to-end tests using Cypress.',
            uses: `- uses: cypress-io/github-action@v5`,
            code: `name: Cypress Tests

on: [push]

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - uses: cypress-io/github-action@v5
        with:
          browser: chrome`,
            icon: '🧪',
            color: 'success'
        },
        {
            type: 'workflow',
            name: 'Terraform Deploy',
            trigger: 'push (main)',
            purpose: 'Deploy infrastructure changes using Terraform.',
            uses: `- uses: hashicorp/setup-terraform@v2`,
            code: `name: Terraform Deploy

on:
  push:
    branches: [main]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.5.0
      - run: terraform init
      - run: terraform apply -auto-approve`,
            icon: '🏗️',
            color: 'secondary'
        },
        {
            type: 'workflow',
            name: 'Publish Docker Image to GitHub Packages',
            trigger: 'release (published)',
            purpose: 'Build and push Docker image to GitHub Container Registry.',
            uses: `- uses: docker/login-action@v2\n- uses: docker/build-push-action@v3`,
            code: `name: Publish Docker Image

on:
  release:
    types: [published]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v3
        with:
          push: true
          tags: ghcr.io/\${{ github.repository_owner }}/myimage:latest`,
            icon: '📦',
            color: 'primary'
        },

        // Marketplace Actions
        { type: 'marketplace', name: 'actions/checkout', trigger: 'First step in most workflows', purpose: 'Checks out your repository to the runner', uses: `- uses: actions/checkout@v3` },
        { type: 'marketplace', name: 'actions/setup-node', trigger: 'Set Node.js version', purpose: 'Sets up a Node.js environment', uses: `- uses: actions/setup-node@v3\n  with:\n    node-version: '18'` },
        { type: 'marketplace', name: 'actions/cache', trigger: 'Speed up builds', purpose: 'Caches dependencies in CI runs', uses: `- uses: actions/cache@v3\n  with:\n    path: ~/.npm\n    key: \${{ runner.os }}-build-\${{ hashFiles('package-lock.json') }}` },
        { type: 'marketplace', name: 'docker/build-push-action', trigger: 'Docker CI/CD', purpose: 'Builds & pushes Docker images', uses: `- uses: docker/build-push-action@v3\n  with:\n    push: true\n    tags: user/app:latest` },

        // 🔥 10 More Popular GitHub Marketplace Actions for CI/CD
        { type: 'marketplace', name: 'actions/upload-artifact', trigger: 'Save build/test artifacts', purpose: 'Uploads build outputs or test results for later use', uses: `- uses: actions/upload-artifact@v3\n  with:\n    name: build-artifact\n    path: ./dist` },
        { type: 'marketplace', name: 'actions/download-artifact', trigger: 'Use saved artifacts', purpose: 'Downloads artifacts from previous jobs in workflow', uses: `- uses: actions/download-artifact@v3\n  with:\n    name: build-artifact` },
        { type: 'marketplace', name: 'codecov/codecov-action', trigger: 'After tests', purpose: 'Uploads code coverage reports to Codecov', uses: `- uses: codecov/codecov-action@v3\n  with:\n    token: \${{ secrets.CODECOV_TOKEN }}` },
        { type: 'marketplace', name: 'coverallsapp/github-action', trigger: 'After tests', purpose: 'Sends coverage data to Coveralls', uses: `- uses: coverallsapp/github-action@v2\n  with:\n    github-token: \${{ secrets.GITHUB_TOKEN }}` },
        { type: 'marketplace', name: 'SonarSource/sonarcloud-github-action', trigger: 'Code analysis stage', purpose: 'Analyzes code quality using SonarCloud', uses: `- uses: SonarSource/sonarcloud-github-action@v1\n  with:\n    projectKey: my_project` },
        { type: 'marketplace', name: 'docker/login-action', trigger: 'Before pushing Docker image', purpose: 'Logs in to Docker registry', uses: `- uses: docker/login-action@v2\n  with:\n    username: \${{ secrets.DOCKER_USER }}\n    password: \${{ secrets.DOCKER_PASS }}` },
        { type: 'marketplace', name: 'peter-evans/create-pull-request', trigger: 'Automated PR creation', purpose: 'Creates pull requests from workflow changes', uses: `- uses: peter-evans/create-pull-request@v5` },
        { type: 'marketplace', name: 'softprops/action-gh-release', trigger: 'On release', purpose: 'Publishes GitHub Releases automatically', uses: `- uses: softprops/action-gh-release@v1\n  with:\n    files: ./dist/*` },
        { type: 'marketplace', name: 'hashicorp/setup-terraform', trigger: 'Terraform CI', purpose: 'Sets up Terraform for infrastructure deployments', uses: `- uses: hashicorp/setup-terraform@v2\n  with:\n    terraform_version: 1.3.0` },
        { type: 'marketplace', name: 'Azure/actions', trigger: 'Azure deployments', purpose: 'Deploys applications to Microsoft Azure', uses: `- uses: Azure/actions@v1` }
    ];


    return (
        <div className="card border-0 shadow-lg bg-white">
            <div className="card-body px-4 px-md-5">
                {/* Intro */}
                {githubActionsData.filter(d => d.type === 'intro').map((intro, i) => (
                    <section key={i} style={{ background: intro.bg }} className="p-4 rounded-4 border shadow-sm mb-4">
                        <h2 className={`h5 fw-semibold ${intro.textColor}`}>{intro.title}</h2>
                        <p className="text-muted small">{intro.description}</p>
                        <ul className="text-muted small ps-3">
                            {intro.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                        </ul>
                    </section>
                ))}

                {/* Install */}
                {githubActionsData.filter(d => d.type === 'install').map((install, i) => (
                    <section key={i} style={{ background: install.bg }} className="p-4 rounded-4 border shadow-sm mb-4 position-relative">
                        <h2 className={`h5 fw-semibold ${install.textColor}`}>{install.title}</h2>
                        <p className="text-muted small">{install.note}</p>
                        <button
                            className={`btn btn-sm ${copiedCode === 'install' ? 'btn-success' : 'btn-outline-dark'} position-absolute top-0 end-0 m-2`}
                            onClick={() => handleCopy(install.code, 'install')}
                        >
                            {copiedCode === 'install' ? '✅ Copied' : '📋 Copy'}
                        </button>
                        <pre className="bg-dark text-white small rounded p-3 mt-2 overflow-auto">
              <code>{install.code}</code>
            </pre>
                    </section>
                ))}

                {/* Workflows */}
                {githubActionsData.filter(d => d.type === 'workflow').map((wf, i) => (
                    <section key={i} className={`mb-4 p-4 bg-white border-start border-${wf.color} border-5 rounded-4 shadow-sm`}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h3 className={`h6 fw-semibold text-${wf.color} mb-0`}>{wf.icon} {wf.name}</h3>
                            <span className={`badge bg-${wf.color} text-white`}>Workflow Example</span>
                        </div>
                        <p className="text-muted small">{wf.purpose}</p>
                        <div className="position-relative">
                            <button
                                className={`btn btn-sm ${copiedCode === i ? 'btn-success' : 'btn-outline-secondary'} position-absolute top-0 end-0 m-2`}
                                onClick={() => handleCopy(wf.code, i)}
                            >
                                {copiedCode === i ? '✅ Copied' : '📋 Copy'}
                            </button>
                            <pre className="bg-dark text-white small p-3 rounded mt-2 overflow-auto">
                <code>{wf.code}</code>
              </pre>
                        </div>
                    </section>
                ))}

                {/* Summary Table */}
                <section className="pt-3">
                    <h2 className="h5 fw-semibold mb-3">📊 CI/CD Workflows & Marketplace Actions</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">
                            <thead className="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Trigger / Usage Context</th>
                                <th>Purpose</th>
                                <th>Uses (Sample Code)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {githubActionsData
                                .filter(d => d.type === 'workflow' || d.type === 'marketplace')
                                .map((row, idx) => (
                                    <tr key={idx}>
                                        <td>{row.name}</td>
                                        <td>{row.trigger}</td>
                                        <td>{row.purpose}</td>
                                        <td>
                        <pre className="bg-light p-2 small m-0">
                          <code>{row.uses}</code>
                        </pre>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GithubActionDoc;
