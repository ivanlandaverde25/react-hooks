import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect.tsx/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect.tsx/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { ScrambleWords } from './05-useReducer/ScrambledWords'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
import { InstagromApp } from './07-useOptimistic/InstagromApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
)
