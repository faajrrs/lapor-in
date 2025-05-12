// frontend/src/utils/logout.js
export const logout = async () => {
  try {
    await fetch("http://localhost:3000/auth/logout", {
      method: "POST",
    });
    localStorage.removeItem("token");
    window.location.href = "/masuk";
  } catch (error) {
    console.error("Gagal logout:", error);
    alert("Gagal logout");
  }
};
