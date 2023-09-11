import React, { useEffect , useState} from 'react';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Redirect, Link, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';


// hooks
import { useRedux } from '../../../hooks';

// actions
import { resetAuth, loginUser } from '../../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../../components/form';
import AuthLayout from '../AuthLayout';
import { apiCall } from '../../../utils/Network';


/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    <Link to="/auth/forget-password" className="text-muted ms-1">
                        {t('Forgot your password?')}
                    </Link>
                </p>
                <p className="text-muted">
                    {t("Don't have an account?")}{' '}
                    <Link to={'/auth/register'} className="text-primary fw-bold ms-1">
                        {t('Sign Up')}
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = () => {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, userLoggedIn, loading, error } = appSelector((state) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));
    
    const location = useLocation();
    const redirectUrl = location.state && location.state.from ? location.state.from.pathname : '/';

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*  form validation schema */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter Email')).email(t('Please enter valid Email')),
            password: yup.string().required(t('Please enter Password')),
        })
    );

    /* handle form submission */
    const onSubmit = async() => {
        const body = {
            email : email,
            password : password
        }
        console.log('body ==>', body);
        const response = await apiCall(
            "api/login/",
            "POST",
            body,
            "",
        );
        const responseJSON = await response.json();
        console.log('responseJSON==>', responseJSON)
        if (response.status == 200) {
            alert('Status 200')
        } else if (response.status == 400) {
            alert('Status 400')
            return;
        }else{
            alert('Status Other')
        }
    };

    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) =>{
        setPassword(e.target.value);
    }

    return (
        <>
            {(userLoggedIn || user) && <Redirect to={redirectUrl}></Redirect>}

            <AuthLayout
                helpText={t('Enter your email address and password to access admin panel.')}
                bottomLinks={<BottomLink />}
            >
                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ email: 'abhijeet@gmail.com', password: 'abhi@123#*' }}
                >
                    <FormInput
                        type="email"
                        name="email"
                        label={t('Email address')}
                        placeholder={t('hello@coderthemes.com')}
                        containerClass={'mb-2'}
                        onChange={handleChangeEmail}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        containerClass={'mb-2'}
                        onChange={handleChangePassword}
                    ></FormInput>

                    <FormInput
                        type="checkbox"
                        name="checkbox"
                        label={t('Remember me')}
                        containerClass={'mb-3'}
                        defaultChecked
                    />

                    <div className="text-center d-grid">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Log In')}
                        </Button>
                    </div>
                </VerticalForm>

                {/* <div className="text-center">
                    <h5 className="mt-3 text-muted">{t('Sign in with')}</h5>
                    <SocialLinks />
                </div> */}
            </AuthLayout>
        </>
    );
};

export default Login;
