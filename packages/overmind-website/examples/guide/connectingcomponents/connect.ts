export const react = [
  {
    fileName: 'App.js',
    target: 'jsx',
    code: `
import React from 'react'
import app from './app'

const App = ({ app }) => {
  if (app.state.isLoading) {
    return <div>Loading app...</div>
  }

  return <h1>My awesome app</h1>
}

export default app.connect(App)
  `,
  },
]

export const reactTs = [
  {
    fileName: 'components/App.tsx',
    code: `
import * as React from 'react'
import app, { Connect } from './app'

const App: React.SFC<Connect> = ({ app }) => {
  if (app.state.isLoading) {
    return <div>Loading app...</div>
  }

  return <h1>My awesome app</h1>
}

export default app.connect(App)
  `,
  },
]

export const vue = [
  {
    fileName: 'components/App.vue (template)',
    target: 'markup',
    code: `
<div v-if="app.state.isLoading">
  Loading app...
</div>
<h1 v-else>My awesome app</h1>
  `,
  },
  {
    fileName: 'components/App.vue (script)',
    code: `
import app from './app'

export default app.connect({})
`,
  },
]

export const vueTs = vue

export const angularTs = [
  {
    fileName: 'app.component.js',
    code: `
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import app from '../app'

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
  <div *ngIf="app.state.isLoading">
    Loading app...
  </div>
  <h1 *ngIf="!app.state.isLoading">
    My awesome app
  </h1>
  \`
})
@app.connect()
export class App {
  constructor(private cdr: ChangeDetectorRef) {}
}
  `,
  },
]
