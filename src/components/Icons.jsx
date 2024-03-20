const style = {
    full: { fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" },
    cols: { 
        blue: { fill: "#0c2829" },
        green: { fill: "#15595d" }
    },
    fills: {
        bluish: { fill: "#0c2829", fillRule: "nonzero" },
        greenish: { fill: "#15595d", fillRule: "nonzero" }
    }    
};

export const ClockIcon = ({ className, dimensions = { width: '20px', height: '20px' } }) => {  
    return (
        <svg className={ className ? className : '' } width={ dimensions.width } height={ dimensions.height } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <circle cx="12" cy="12" r="9" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 8V13H16" stroke="#292929" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    );   
};

export const Logo = ({ className, size, width, height, viewBox }) => {
    return  <svg className={ className === undefined ? null : className } width={ width === undefined ? "100%" : width } height={ height === undefined ? "100%" : height } viewBox={ viewBox === undefined ? "0 0 398 141" : viewBox } version="1.1" xmlns="http://www.w3.org/2000/svg" style={ style.full }>
                <g id="lighthouse_wide" transform={ size === 'small' ? "translate(-150,0)" : null }>
                    { size !== 'small' &&
                    <>
                        <path d="M39.355,68.886c1.126,-0 1.639,0.615 1.639,1.639l0,10.248c0,1.026 -0.513,1.641 -1.639,1.641l-11.888,-0l0,56.57c0,1.128 -0.513,1.64 -1.64,1.64l-10.658,0c-1.024,0 -1.64,-0.512 -1.64,-1.64l-0,-56.57l-11.889,-0c-1.024,-0 -1.64,-0.615 -1.64,-1.641l0,-10.248c0,-1.024 0.616,-1.639 1.64,-1.639l37.715,-0Z" style={ style.fills.bluish }/>
                        <path d="M75.432,68.886c9.632,-0 14.757,5.124 14.757,14.756l0,6.765c0,1.025 -0.513,1.639 -1.639,1.639l-10.352,0c-1.024,0 -1.641,-0.614 -1.641,-1.639l0,-4.305c0,-2.663 -1.331,-4.099 -4.097,-4.099l-5.639,0c-2.561,0 -4.097,1.436 -4.097,4.099l-0,8.712l24.8,7.994c1.742,0.614 2.665,1.845 2.665,3.792l0,19.267c0,9.633 -5.125,14.757 -14.757,14.757l-11.479,0c-9.532,0 -14.757,-5.124 -14.757,-14.757l-0,-6.661c-0,-1.129 0.614,-1.641 1.639,-1.641l10.35,-0c1.129,-0 1.64,0.512 1.64,1.641l0,4.304c0,2.767 1.537,4.099 4.1,4.099l5.535,-0c2.662,-0 4.097,-1.332 4.097,-4.099l0,-10.352l-24.596,-7.994c-1.843,-0.615 -2.765,-1.843 -2.765,-3.792l-0,-17.73c-0,-9.632 5.225,-14.756 14.757,-14.756l11.479,-0Z" style={ style.fills.bluish }/>
                        <path d="M139.383,68.886c1.128,-0 2.049,0.921 2.049,2.05l0,54.931c0,9.633 -5.122,14.757 -14.757,14.757l-11.478,0c-9.635,0 -14.758,-5.124 -14.758,-14.757l0,-54.931c0,-1.129 0.922,-2.05 2.05,-2.05l9.838,-0c1.128,-0 2.051,0.921 2.051,2.05l-0,52.061c-0,2.767 1.433,4.099 4.1,4.099l5.327,0c2.666,0 4.1,-1.332 4.1,-4.099l-0,-52.061c-0,-1.129 0.922,-2.05 2.051,-2.05l9.427,-0Z" style={ style.fills.bluish }/>
                        <path d="M249.051,68.886c1.026,-0 1.642,0.615 1.642,1.639l-0,68.459c-0,1.025 -0.616,1.64 -1.642,1.64l-8.096,0c-0.922,0 -1.433,-0.41 -1.843,-1.331l-19.268,-39.15l-0,38.841c-0,1.025 -0.512,1.64 -1.639,1.64l-9.633,0c-1.025,0 -1.641,-0.615 -1.641,-1.64l0,-68.459c0,-1.024 0.616,-1.639 1.641,-1.639l8.095,-0c0.923,-0 1.436,0.41 1.845,1.332l19.268,39.148l-0,-38.841c-0,-1.024 0.51,-1.639 1.639,-1.639l9.632,-0Z" style={ style.fills.bluish }/>
                        <path d="M282.772,86.513l-12.809,52.678c-0.205,0.921 -0.72,1.433 -1.643,1.433l-10.042,0c-1.127,0 -1.64,-0.615 -1.333,-1.742l17.012,-68.562c0.206,-1.024 0.82,-1.434 1.744,-1.434l14.244,-0c0.923,-0 1.539,0.41 1.743,1.434l17.012,68.562c0.309,1.127 -0.205,1.742 -1.434,1.742l-9.942,0c-0.921,0 -1.434,-0.512 -1.64,-1.433l-12.912,-52.678Z" style={ style.fills.bluish }/>
                        <path d="M371.319,68.886c1.333,-0 2.051,0.718 2.051,2.05l-0,67.637c-0,1.334 -0.718,2.051 -2.051,2.051l-9.529,0c-1.333,0 -2.05,-0.717 -2.05,-2.051l0,-40.274l-0.719,-0l-9.632,40.583c-0.309,1.127 -1.024,1.742 -2.256,1.742l-6.045,0c-1.232,0 -1.948,-0.615 -2.255,-1.742l-9.634,-40.583l-0.717,-0l-0,40.274c-0,1.334 -0.718,2.051 -2.049,2.051l-9.429,0c-1.332,0 -2.049,-0.717 -2.049,-2.051l-0,-67.637c-0,-1.332 0.717,-2.05 2.049,-2.05l13.527,-0c1.231,-0 1.947,0.615 2.256,1.741l11.375,45.709l11.378,-45.709c0.305,-1.126 1.022,-1.741 2.253,-1.741l13.526,-0Z" style={ style.fills.bluish }/>
                        <path d="M385.262,140.625c-1.128,-0 -1.64,-0.616 -1.64,-1.64l0,-68.46c0,-1.024 0.512,-1.639 1.64,-1.639l10.659,-0c1.024,-0 1.639,0.615 1.639,1.639l0,68.46c0,1.024 -0.615,1.64 -1.639,1.64l-10.659,-0Z" style={ style.fills.bluish }/>
                    </>
                    }
                    <path d="M194.047,139.782c0,0.58 -0.407,0.843 -1.08,0.843l-37.626,-0c-0.674,-0 -1.08,-0.263 -1.08,-0.843l-0,-12.648c-0,-0.528 0.406,-0.844 1.08,-0.844l37.626,-0c0.673,-0 1.08,0.316 1.08,0.844l0,12.648Z" style={ style.fills.bluish }/>
                    <path d="M190.167,111.061c-0,0.58 -0.406,0.843 -1.08,0.843l-33.747,28.721c-0.674,0 -1.08,-0.264 -1.08,-0.843l0,-12.649c0,-0.527 0.406,-0.843 1.08,-0.843l33.747,-28.721c0.674,0 1.08,0.315 1.08,0.844l-0,12.648Z" style={ style.fills.greenish }/>
                    <path d="M189.629,15.51c-0,-8.566 -6.945,-15.51 -15.511,-15.51c-8.566,0 -15.509,6.944 -15.509,15.51l31.02,0Z" style={ style.fills.bluish }/>
                    <path d="M190.014,111.112c0,0.58 -0.324,0.842 -0.864,0.842l-30.102,0c-0.538,0 -0.862,-0.262 -0.862,-0.842l-0,-12.649c-0,-0.527 0.324,-0.843 0.862,-0.843l30.102,-0c0.54,-0 0.864,0.316 0.864,0.843l0,12.649Z" style={ style.fills.bluish }/>
                    <path d="M186.859,82.441c-0,0.58 -0.324,0.843 -0.864,0.843l-26.893,28.67c-0.538,0 -0.863,-0.262 -0.863,-0.843l0,-12.648c0,-0.527 0.325,-0.843 0.863,-0.843l26.893,-28.671c0.54,0 0.864,0.316 0.864,0.844l-0,12.648Z" style={ style.fills.greenish }/>
                    <path d="M186.859,82.441c-0,0.58 -0.26,0.843 -0.69,0.843l-24.082,0c-0.43,0 -0.691,-0.263 -0.691,-0.843l0,-12.648c0,-0.528 0.261,-0.844 0.691,-0.844l24.082,0c0.43,0 0.69,0.316 0.69,0.844l-0,12.648Z" style={ style.fills.bluish }/>
                    <path d="M186.443,54.699l-11.934,-0l11.934,-0l-24.33,28.585c-0.432,-0 -0.69,-0.263 -0.69,-0.843l0,-12.648c0,-0.527 0.258,-0.844 0.69,-0.844l12.396,-14.25c0.431,-0 12.005,-0.084 12.005,-0.084c0,0.579 0.431,-0 0,-0l-0.071,0.084Z" style={ style.cols.green }/>
                    <path d="M167.021,50.683c-1.601,-0 -2.762,-1.212 -2.762,-2.883l-0,-15.593c-0,-1.643 1.187,-2.883 2.762,-2.883l14.592,-0c1.574,-0 2.762,1.24 2.762,2.883l0,15.593c0,1.671 -1.162,2.883 -2.762,2.883l-14.592,-0Z" style={ style.fills.bluish }/>
                    <path d="M194.485,60.94c0,0.579 -0.323,0.842 -0.862,0.842l-38.999,-0c-0.54,-0 -0.862,-0.263 -0.862,-0.842l-0,-5.483c-0,-0.526 0.322,-0.843 0.862,-0.843l38.999,0c0.539,0 0.862,0.317 0.862,0.843l0,5.483Z" style={ style.fills.bluish }/>
                    <path d="M194.436,25.002c-0,0.581 -0.322,0.843 -0.862,0.843l-38.999,0c-0.54,0 -0.864,-0.262 -0.864,-0.843l0,-5.481c0,-0.527 0.324,-0.844 0.864,-0.844l38.999,0c0.54,0 0.862,0.317 0.862,0.844l-0,5.481Z" style={ style.fills }/>
                </g>
            </svg>;
};

export const GitHubIcon = ({ className, dimensions = { width: '24px', height: '24px' } }) => { 
    return (
            <svg width={ dimensions.width } height={ dimensions.height } className={ className === undefined ? null : className } viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
    );   
};

export const QuickRef = ({ className, dimensions = { width: '24px', height: '24px' } }) => {  
    return (
        <svg className={ className ? className : '' } width={ dimensions.width } height={ dimensions.height } viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M660-160h40v-160h-40v160Zm20-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-800v640-640 200-200Zm80 400h147q11-23 25.5-43t32.5-37H280v80Zm0 160h123q-3-20-3-40t3-40H280v80ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h320l240 240v92q-19-6-39-9t-41-3v-40H480v-200H200v640h227q11 23 25.5 43T485-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Z"/>
        </svg>
    );   
};

