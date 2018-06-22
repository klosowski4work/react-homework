import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        scripts: PropTypes.array
    }

    render() {
        const { children, scripts, preloadedState } = this.props;

        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <title>Server Side Rendering</title>
                    <link href="/main.css" rel="stylesheet" type="text/css" />
                </head>
                <body>
                    <div id="root"
                        dangerouslySetInnerHTML={{ __html: children }}
                    ></div>
                    {scripts.map((item, index) => {
                        return <script key={index} src={item}></script>;
                    })}
                    <script>
                        window.PRELOADED_STATE = {JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                    </script>
                </body>
            </html>
        );
    }
}

export default Html;