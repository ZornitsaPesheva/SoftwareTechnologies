using Blog.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Blog.Controllers.Admin
{
    internal class ApplicationUserManager<T>
    {
        private UserStore<ApplicationUser> userStore;

        public ApplicationUserManager(UserStore<ApplicationUser> userStore)
        {
            this.userStore = userStore;
        }
    }
}