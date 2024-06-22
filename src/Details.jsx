const Details = ({userData}) => {
  const {avatar_url,followers,following,public_repos,url,name} = userData
  return (
    <div>
        <div className="container text-left">
            <div className="row align-items-center">
                <div className="col-6">
                        <img src={avatar_url} className="img-thumbnail" width="300" height="300"></img>
                </div>
                <div className="col-6">
                    <div className="row">
                        <p>Followers: {followers}</p>
                        <p>Following: {following}</p>
                        <p>No of repos: {public_repos}</p>
                        <p>Name: {name}</p>

                        <button className="btn btn-primary"> <a href={url}>Visit Account</a></button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details