import React from "react";
import moment from "moment";
import {
  RepoForkedIcon,
  StarIcon,
  LawIcon,
  RepoIcon,
} from "@primer/octicons-react";
import "./Repo.scss";

const Repo = ({ repo }) => {
  const updatedAt = moment(repo.updated_at).startOf("hour").fromNow();
  return (
    <li className="repo">
      <h2>
        <RepoIcon size={24} />
        <a href={repo.html_url} className="repo-title">
          {repo.name}
        </a>
      </h2>
      <p>{repo.description}</p>
      <div className="stats">
        <p>{repo.language}</p>
        <a href={repo.forks_url}>
          <RepoForkedIcon size={16} />
          {repo.forks}
        </a>
        <a href={repo.stargazers_url}>
          <StarIcon size={16} />
          {repo.stargazers_count}
        </a>
      </div>

      {repo.license && (
        <p>
          <LawIcon size={16} />
          {repo.license.name}
        </p>
      )}

      <p>Updated {updatedAt}</p>
    </li>
  );
};

export default Repo;
