import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useUserDispatch: () => AppDispatch = useDispatch
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector