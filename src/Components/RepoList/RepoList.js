import React, { useState, useEffect } from "react";
import Repo from "../Repo/Repo";
import "./RepoList.scss";

const RepoList = ({ username }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async (username) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((repos) => setRepos(repos));
  };

  useEffect(() => {
    fetchRepos(username);
    return function cleanup() {
      setRepos([]);
    };
  }, [username]);

  return (
    <section className="repo-list">
      {repos && repos.length ? (
        repos.map((repo) => <Repo key={repo.id} repo={repo} />)
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
};

export default RepoList;
