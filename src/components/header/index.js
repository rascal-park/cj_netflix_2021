/* eslint-disable no-shadow */
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
    Background,
    ButtonLink,
    Container,
    Logo,
    Feature,
    FeatureCallOut,
    Text,
    Link,
    Picture,
    Profile,
    Dropdown,
    Group,
    Search,
    SearchIcon,
    SearchInput
} from "./styles/header";
import { Player } from "..";

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : (
        children
    );
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return (
        <>
            <Player>
                <Player.Button1 />
                <Player.Video src="/videos/squid_game.mp4" />
            </Player>
            {children}
        </>
    );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    // @ts-ignore
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({
    children,
    ...restProps
}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    // @ts-ignore
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.Search = function HeaderSearch({
    searchTerm,
    setSearchTerm,
    ...restProps
}) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon
                onClick={() => setSearchActive((searchActive) => !searchActive)}
                data-testid="search-click"
            >
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                // @ts-ignore
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};
