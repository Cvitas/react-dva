/** @Author: Chasen @Date: 2018/11/23 10:12
 * @Description: 动态路由，按需加载
 * */

import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic'
import { Layout } from 'antd'
import { routes } from './routes'
import history from './history'

const { ConnectedRouter } = routerRedux;

function  RouterConfig({app}) {
    return (
        <ConnectedRouter history={ history }>
            <Switch>
                <Route path="/" exact render={ () => <Redirect to="/Login"/> }/>
                {
                    routes.map(({ path, name, layout, ...dynamics }) => {
                        const Component = dynamic({ app, ...dynamics });
                        return <Route key={ name } exact path={ path } render={ (props) => {
                            if ( layout ) {
                                return (
                                    <Layout>
                                        <Component { ...props }/>
                                    </Layout>
                                );
                            }
                            return <Component { ...props }/>
                        }
                        }/>
                    })
                }
            </Switch>
        </ConnectedRouter>
    );
}

export default RouterConfig;