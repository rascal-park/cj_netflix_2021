/* eslint-disable no-shadow */
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
    Background,
    ButtonLink,
    Container,
    Logo
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    // @ts-ignore
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};