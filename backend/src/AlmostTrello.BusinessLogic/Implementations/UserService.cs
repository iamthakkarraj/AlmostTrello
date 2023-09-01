using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.BusinessLogic.Interfaces;
using AlmostTrello.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.BusinessLogic.Implementations
{
    public class UserService : IUserService
    {
        #region Variables
        private readonly IUserRepository _userRepository;
        #endregion

        #region Constructor
        public UserService(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }
        #endregion

        #region Service Methods 
        public async Task<bool> Authenticate(AuthenticationViewModel authenticationViewModel)
        {

            var user = await _userRepository.Get(authenticationViewModel.Email);
            return EncryptionHelpers.Verify(authenticationViewModel.Password, user.Password);
        }

        public async Task<UserViewModel> Create(RegistrationViewModel registrationViewModel)
        {
            registrationViewModel.Password = EncryptionHelpers.Hash(registrationViewModel.Password);
            await _userRepository.Create(registrationViewModel);
            return new UserViewModel()
            {
                Email = registrationViewModel.Email,
                Name = registrationViewModel.Name,
            };
        }
        #endregion
    }

}
