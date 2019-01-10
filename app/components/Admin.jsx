import React, { PureComponent } from 'react';
import ComponentOne from 'ComponentOne';

const isAdmin = true; // this value should be from the database

const adminComponent = (Component) => {

    return class Admin extends PureComponent {

        render () {

            if (isAdmin) {

                return (

                    <div className="admin">
                        <p>Admin only</p>
                        <Component {...this.props} />
                    </div>

                )
            }
            else {

                return null;

            }

        }

    }

};

export default adminComponent(ComponentOne);
