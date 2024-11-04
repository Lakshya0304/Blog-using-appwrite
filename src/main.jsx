import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import  AuthLayout from "./components/AuthLayout.jsx"
import  Login from "./pages/Login.jsx"
import  Signup from "./pages/Signup.jsx"
import  AllPosts from "./pages/AllPost.jsx"
import  AddPost from "./pages/AddPost.jsx"
import  EditPost from "./pages/EditPost.jsx"
import  Post from "./pages/Post.jsx"
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      {/* Routing */}
      {/* <BrowserRouter>
        <Routes>
          
          <Route path="/" element= { <App />} />

          <Route path="/login" element= { 
            <AuthLayout authentication={false}>
              <Login/>
            </AuthLayout>  } />

          <Route path="/signup" element= {
            <AuthLayout authentication={false}>
              <Signup />
            </AuthLayout> } />

          <Route path="/all-posts" element= { 
            <AuthLayout authentication={true} >
            <AllPosts/>
            </AuthLayout> } />

          <Route path="/add-post" element= { 
            <AuthLayout authentication={true}>
              <AddPost/>
            </AuthLayout>} />

          <Route path="/edit-post/:slug" element= { 
            <AuthLayout authentication={true}>
              <EditPost/>
            </AuthLayout>} />

          <Route path="/post/:slug" element= { <Post />} />

        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
