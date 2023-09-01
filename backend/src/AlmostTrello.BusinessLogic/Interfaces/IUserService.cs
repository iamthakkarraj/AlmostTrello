using AlmostTrello.BusinessEntities.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.BusinessLogic.Interfaces
{
    public interface IUserService
    {

        public Task<bool> Authenticate(AuthenticationViewModel authenticationViewModel);
        public Task<UserViewModel> Create(RegistrationViewModel registrationViewModel);


    }

}
