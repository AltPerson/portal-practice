'use client';
import store from '@/lib/store/store';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import React from 'react';
import { Provider } from 'react-redux';

const Providers = ({children}:{
	children:React.ReactNode
}) => {
	return (
		<AppRouterCacheProvider>
			<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</Provider>	
		</AppRouterCacheProvider>
	)
}

export default Providers