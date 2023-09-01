using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataAccess.Helpers;
using AlmostTrello.DataAccess.Interfaces;
using AlmostTrello.DataEntities.DataModels;
using AlmostTrello.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataAccess.Implementations
{
    public class UserRepository : IUserRepository
    {
        #region Variables
        private readonly IUow _uow;
        #endregion

        #region Constructor
        public UserRepository(IUow uow)
        {
            _uow = uow;
        }
        #endregion

        #region Repository Methods
        public Task<User> Get(string emailId)
        {
            var user = _uow.Repository<User>().FindAsync(x => x.Email ==  emailId);
            return user;
        }

        public async Task Create(RegistrationViewModel registrationViewModel)
        {
            await _uow.Repository<User>().Create(registrationViewModel.ToDataModel());
        }
        #endregion
    }

}
