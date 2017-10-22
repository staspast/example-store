import React, { Component } from 'react'

import {Form, FormGroup, Checkbox, Row, Col} from 'react-bootstrap'

class LogIn extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col xs={12}>
                        <button className="button-modal button-modal__social button-modal__social--twitter">
                            <icon className="icon icon-twitter"></icon>
                            <span>Twitter</span>
                        </button>

                        <button className="button-modal button-modal__social button-modal__social--facebook">
                            <icon className="icon icon-facebook"></icon>
                            <span>Facebook</span>
                        </button>

                        <button className="button-modal button-modal__social button-modal__social--google">
                            <icon className="icon icon-google-plus"></icon>
                            <span>Google+</span>
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <div className="divider">
                            <span>or</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <FormGroup>
                            <icon className="icon icon-mail"></icon>

                            <input
                                onChange={ this.props.handleEmail }
                                className="input input__modal"
                                type="email"
                                placeholder="Email address"
                            />
                        </FormGroup>

                        <FormGroup>
                            <icon className="icon icon-key"></icon>

                            <input
                                onChange={ this.props.handlePassword }
                                className="input input__modal"
                                type={ this.props.typeInput }
                                placeholder="Password"
                            />
                        </FormGroup>


                        <FormGroup>
                            <Checkbox>
                                Remember me
                            </Checkbox>

                            <div
                                onClick={ () => this.props.changeTypeInput() }
                                className="button-modal button-modal__forgot-password"
                            >
                                { this.props.typeInput === 'password' ? 'Show' : 'Hide' } password
                            </div>
                        </FormGroup>

                        <button className="button-modal button-modal__login">Log in</button>

                        <button
                            onClick={ () => this.flipState('forgotPassword') }
                            className="button-modal button-modal__forgot-password">
                            Forward password
                        </button>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div className="divider"></div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <span>Don’t have an account?</span>
                        <button
                            className="button-modal button-modal__signup"
                            onClick={() => this.props.flipState('signUpVariant')}>
                            Sign up
                        </button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default LogIn;