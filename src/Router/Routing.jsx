import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CommonPage from '../CommonPage/CommonPage'
import Home from '../Home/Home'
import LatestJob from '../LatestJob/LatestJob'
import Result from '../Result/Result'
import Admit from '../AdmitCard/Admit'
import Syllabus from '../Syllabus/Syllabus'
import AnswerKey from "../AnswerKey/AnswerKey"
import Admission from "../Admission/Admission"
import Important from "../Important/Important"
import Certificate from '../Certificate/Certificate'


export const router = createBrowserRouter([

  {
    path: "/",
    element: <CommonPage />,
    children:
      [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Home",
          element: <Home />
        },
        {
          path: "/latestJobs",
          element: <LatestJob />
        },
        {
          path: "/Results",
          element: <Result />,
        },
        {
          path: "/AdmitCard",
          element: <Admit />,
        },
        {
          path: "/AnswerKey",
          element: <AnswerKey />
        },
        {
          path: "/Syllabus",
          element: <Syllabus />
        },
        {
          path: "/Search",
          element: <h2>This is a syllabus section</h2>
        },
        {
          path:"/Admission",
          element:<Admission />
        },
        {
          path: "/ConatctUs",
          element: <h2>This is a syllabus section</h2>
        },
        {
          path:'/Important',
          element:<Important />
        },
        {
          path:'/Certificate',
          element:<Certificate />
        }
      ]

  }
])