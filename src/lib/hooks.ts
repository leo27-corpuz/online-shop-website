import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: (selector: (state: RootState) => any) => any = useSelector;
export const useAppStore = () => useStore<AppStore>();