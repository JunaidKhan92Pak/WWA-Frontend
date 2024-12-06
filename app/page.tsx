// import countrypage from "./(pages)/countrypage/page";
import Countrypage from "./(pages)/countrypage/page";
import { AuthProvider } from "./(auth)/auth/authProvider";
export default function Home() {
  return (
    <AuthProvider>
      <Countrypage />
    </AuthProvider>
  );
}
