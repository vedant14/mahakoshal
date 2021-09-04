import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

export function JobTable() {
    const data = useStaticQuery(graphql`
        {
            allGraphCmsCareer {
                nodes {
                    jobName
                    location
                    experience
                    jobLink
                }
            }
        }
    `);
    return (
        <Wrapper className="Container">
            <div>
                <table>
                    <tr>
                        <th>Role</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                    {data.allGraphCmsCareer.nodes.map((item) => (
                        <tr>
                            <td>{item.jobName}</td>
                            <td>{item.location}</td>
                            <td>{item.experience}</td>
                            <td>
                                <Link to={item.jobLink}>View</Link>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </Wrapper>
    );
}
