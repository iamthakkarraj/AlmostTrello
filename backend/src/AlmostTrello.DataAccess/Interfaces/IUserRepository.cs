using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.DataEntities.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlmostTrello.DataAccess.Interfaces
{
    public interface IUserRepository
    {
        public Task Create(RegistrationViewModel registrationViewModel);
        public Task<User> Get(string emailId); 
    }

}
