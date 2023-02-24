import React from 'react'
import { useLadleContext, ActionType, ThemeState } from "@ladle/react"
import type { GlobalProvider } from "@ladle/react"
import '../src/styles/base.css'


export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => {
  const { dispatch } = useLadleContext()

  return (<>
    <h1>Theme: {globalState.theme}</h1>
    <button
      onClick={() =>
        dispatch({
          type: ActionType.UpdateTheme,
          value:
            globalState.theme === ThemeState.Dark
              ? ThemeState.Light
              : ThemeState.Dark,
        })
      }
    >
      Switch theme
    </button>
    <h2>{storyMeta?.customValue}</h2>
    {children}
  </>
  )
}
