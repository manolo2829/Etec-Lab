import React,{useState} from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
 


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [formType, setFormType] = useState(true);

    const PasswordValidate = (e) => {
        if(password === confirmPassword){
            CreateUser()
        }else{
            setPasswordError('Las contraseñas no coinciden')
        }
    }

    const CreateUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('usuario creado')
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ..
        });
    }

    const SignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('sesion iniciada')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            if(errorCode === 'auth/wrong-password'){
                setPasswordError('La contraseña es incorrecta')
            }else if(errorCode === 'auth/user-not-found'){
                setEmailError('El email no pertenece a ningun usuario')
            }
        });
    }

    return ( 
        <div className="container-lg py-5">
            <form className={formType ? ('d-none') : ('d-block')}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                </div>
                {
                    passwordError ?(
                        <p className="text-danger">{passwordError}</p>
                    ):(
                        <span className="d-none"></span>
                    )
                }
                
                <button type="submit" className="btn btn-primary" onClick={(e) => {PasswordValidate(e)}} >Create</button>
            </form>
            <form className={formType ? ('d-block') : ('d-none')}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    {
                        emailError ? (
                            <div id="emailHelp" className="form-text text-danger">{emailError}</div>
                        ):(
                            <span className='d-none'></span>
                        )
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                {
                    passwordError ?(
                        <p className="text-danger">{passwordError}</p>
                    ):(
                        <span className="d-none"></span>
                    )
                }
                
                <button type="submit" className="btn btn-primary" onClick={(e) => {SignIn(e)}} >SignIn</button>
            </form>
            <a href="#" onClick={ () => {setFormType(!formType)} } >{

                formType ? (
                    'Crear una cuenta'
                ):(
                    'Iniciar sesion'
                )
            
            }
            </a>
        </div>
     );
}
 
export default Login;