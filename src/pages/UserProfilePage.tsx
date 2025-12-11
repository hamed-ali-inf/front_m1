import React from "react";
import { UserProfilePanel, UserProfile } from "../components/UserProfilePanel";

export default function UserProfilePage() {
  const sampleData: UserProfile = {
    name: "haloui salima",
    email: "haloui salima@mail.com",
    phone: "+213 661 234 567",
    teacherNumber: "ENSG-2025-01",
    department: "Informatique",
    
  };

  return <UserProfilePanel data={sampleData} />;
}
