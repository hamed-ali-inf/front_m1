import React from "react";

export interface UserProfile {
  name: string;
  email?: string;
  phone?: string;
  department?: string;
  teacherNumber?: string;   
      
}

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
  }}>
    {children}
  </div>
);

export const UserProfilePanel: React.FC<{ data?: UserProfile }> = ({ data }) => {
  const d: UserProfile = {
    name: data?.name ?? "Nom de l'utilisateur",
    email: data?.email ?? "user@mail.com",
    phone: data?.phone ?? "+213 000 000 000",
    department: data?.department ?? "Département",
    teacherNumber: data?.teacherNumber ?? "2222123456", 
    
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: { display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
    sidebar: { width: "220px", backgroundColor: "#3f2a6e", color: "#fff", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" },
    sidebarNavItem: { margin: "10px 0", cursor: "pointer" },
    main: { flex: 1, padding: "40px", backgroundColor: "#f7f7f7" },
    card: { backgroundColor: "#fff", borderRadius: "12px", padding: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", marginBottom: "20px" },
    infoItem: { marginBottom: "12px" },
    infoTitle: { fontSize: "12px", color: "#666" },
    infoValue: { fontSize: "14px", fontWeight: 500 }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div>
          <h2>Account prof</h2>
          
        </div>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        <div style={styles.card}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Icon>👤</Icon>
            <div>
              <div style={{ fontWeight: 600, fontSize: "18px" }}>{d.name}</div>
              <div style={{ fontSize: "14px", color: "#444" }}>{d.department}</div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3>Informations personnelles</h3>
          <div style={styles.infoItem}>
            <div style={styles.infoTitle}>Email</div>
            <div style={styles.infoValue}>{d.email}</div>
          </div>
          <div style={styles.infoItem}>
            <div style={styles.infoTitle}>Téléphone</div>
            <div style={styles.infoValue}>{d.phone}</div>
          </div>
          <div style={styles.infoItem}>
    <div style={styles.infoTitle}>Numéro Enseignant</div>
    <div style={styles.infoValue}>{d.teacherNumber}</div>
  </div>
  
  <div style={styles.infoItem}>
  <div style={styles.infoTitle}>Département</div>
  <div style={styles.infoValue}>{d.department}</div> {/* هذه السطر يعرض Département */}
</div>

        </div>
      </main>
    </div>
  );
};
