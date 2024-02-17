export const authConfig = {
  providers : [],
  pages:{
    signIn : "/"
  },
  callbacks : {
    authorized ({auth, request}){
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (request.nextUrl.pathname.startsWith("/checkin")) return true
      
      if(isOnDashboard){
        if(isLoggedIn) return true;
        return false;
      }else if(isLoggedIn){
        return Response.redirect(new URL('/dashboard', request.nextUrl));
      }
      return true;
    }
  }
}