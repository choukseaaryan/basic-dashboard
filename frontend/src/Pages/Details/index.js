import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageLoader from '../../Components/PageLoader';
import ErrorPage404 from '../../Components/ErrorPage404';

const Details = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);
  if (loading) {
    return <PageLoader />;
  }
  if (error) {
    return <ErrorPage404 />;
  }
  return (
    <div className="details">
      <div className="details__card">
        <div className="details__card__image">
          <img src={user.avatar} alt={user.first_name} />
        </div>
        <div className="details__card__info">
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;