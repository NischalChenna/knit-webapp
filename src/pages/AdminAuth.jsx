import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { KnitWeb } from "../components/KnitAuth";
import { useEffect, useState } from "react";

function AdminAuth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [adminDetails, setAdminDetails] = useState({});

  useEffect(() => {
    let stateStr = searchParams.get("state") || "";
    const stateObj = JSON.parse(atob(stateStr));
    setAdminDetails({
      token: stateObj.authSessionToken,
      appId: stateObj.appId,
      sandbox:stateObj.sandbox
    });

  }, []);


  const onSuccess = (e) => {
    e.preventDefault();
    console.log(e?.detail?.['integration-id']);
  };

  return (
    <KnitWeb
      authSessionToken={adminDetails.token}
      adminMode={Object.keys(adminDetails).length > 0}
      selectedApp={adminDetails.appId}
      sandbox={adminDetails.sandbox}
      onSuccess={(e) => {
        onSuccess(e);
      }}
    ></KnitWeb>
  );
}

export default AdminAuth;
