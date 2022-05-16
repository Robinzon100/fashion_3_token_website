import Link, { LinkProps } from 'next/link';
import React, { CSSProperties, FC, forwardRef, MouseEventHandler, SVGProps, useMemo } from 'react';
import { chooseButtonTheme, buttonThemeNames } from './utils/button.themes';

export type SVGComponent = FC<SVGProps<SVGSVGElement>>;


interface ButtonBaseProps {
    size: { x: number, y: number; },
    theme: typeof buttonThemeNames[number],
    className?: string,
    id?: string,
    disabled?: boolean,
    children: JSX.Element[] | JSX.Element,
    style?: CSSProperties,
    onClick?: MouseEventHandler,
    onHover?: MouseEventHandler,
    bgColor?: string,
    border?: string,
    boxShadow?: string,
    href?: string,
    inNewTab?: boolean,
    StartIcon?: SVGComponent,
    EndIcon?: SVGComponent,
}


export type ButtonProps = ButtonBaseProps &
    (
        | (Omit<JSX.IntrinsicElements["a"], "href"> & { href: LinkProps["href"]; })
        | (& { href?: never; })
    );






const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(({
    size,
    theme,
    className,
    id,
    disabled,
    children,
    style,
    onClick,
    onHover,
    href,
    inNewTab,
    StartIcon,
    EndIcon }, ref) => {

    const buttonTheme = useMemo(() => chooseButtonTheme(theme), [theme]);




    const _onClick = (e) => {
        if (disabled) {
            return;
        } else {
            href ? window.open(`${href}`, '_blank') : onClick!(e);
        }
    };



    return (
        <>
            {!href ?
                (

                    <button
                        // @ts-ignore
                        ref={ref}
                        className={`button ${className}`}
                        id={`${id}`}
                        disabled={disabled}
                        onClick={(e) => _onClick(e)}
                        onMouseOver={onHover}
                        style={style}>

                        {StartIcon && (
                            <StartIcon />
                        )}

                        <div className={`button_container`}>
                            {children}
                        </div>

                        {EndIcon && (
                            <EndIcon />
                        )}
                    </button>

                ) : (
                    <button
                        // @ts-ignore
                        ref={ref}
                        className={`button ${className}`}
                        id={`${id}`}
                        disabled={disabled}
                        onMouseOver={onHover}
                        style={style}>

                        {StartIcon && (
                            <StartIcon />
                        )}

                        <Link href={`${href}`} passHref>
                            {inNewTab ? (
                                <a target="_blank" rel="noopener noreferrer">
                                    <div className={`button_container`}>
                                        {children ? children : null}
                                    </div>
                                </a>
                            ) : (
                                <div className={`button_container`}>
                                    {children ? children : null}
                                </div>
                            )}

                        </Link>

                        {EndIcon && (
                            <EndIcon />
                        )}
                    </button>
                )
            }


            <style jsx>
                {`

                    a{
                        text-decoration: none;
                    }
                    .button{
                        background: transparent;
                        border: none;
                        padding: 0;
                        user-select: none;
                        display: inline-block;
                        transition: all .3s ease;
                        ${buttonTheme}
                    }
                    

                    .button_container{
                        pointer-events: ${disabled && 'none'};
                        cursor: ${disabled ? 'not-allowed' : 'pointer'};
                        padding: calc(${size.y} * .38vw) calc(${size.x} * 1.1vw);
                        border: 1px solid #ffffff00;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        justify-content: center;
                        box-sizing: border-box;
                        transition: all .2s ease;
                        user-select: none;
                        border-radius: 14px;
                    }


                    .button:focus { outline: none; }
                    .button:hover{
                        filter: saturate(3.5);
                        transform: translateY(-3%);
                        box-shadow: inset 0px 7px 11px 0px rgb(255 255 255 / 2%) !important;
                    }

                    .button:active{
                        transform: translateY(0%) !important;
                        box-shadow: inset 0px 5px 11px 0px rgb(255 255 255 / 2%) !important;
                    }
                `}
            </style>
        </>
    );
});

Button.displayName = 'Button';
export default Button;
