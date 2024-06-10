"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CourseSearch, Courses } from './components';
import LoadingPage from './loading';

const HomePage = () => {
     const [courses, setCourses] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchCourses = async () => {
               const res = await fetch('/api/courses');
               const data = await res.json();
               setCourses(data);
               setLoading(false);
          }
          fetchCourses();
     }, []);

     if (loading) {
          return <LoadingPage />
     };

     return (
          <>
               <h1>devEmma NextJs Learning Process</h1>
               <CourseSearch getSearchResult={(results) => setCourses(results)} />
               <Courses courses={courses} />
          </>
     )
}

export default HomePage;