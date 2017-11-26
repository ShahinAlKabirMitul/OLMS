using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using OLMS.BackEnd.Model;
using OLMS.BackEnd.Repository;
using OLMS.BackEnd.RequestModel;
using OLMS.BackEnd.ViewModel;

namespace OLMS.BackEnd.Service
{
    public class BaseService<T,TR,TV> where T:Entity where TR:BaseRequestModel<T> where TV:BaseViewModel<T>
    {
        BaseRepository<T> repository;

        public BaseService()
        {
            repository=new BaseRepository<T>();
        }
        public  IQueryable<T> SearchQueryable(BaseRequestModel<T> request)
        {
            IQueryable<T> students = repository.Get();
            var expression = request.GetExpression();
            students = students.Where(expression);
            
            students = request.OrderByFunc()(students);
            students = request.SkipAndTake(students);
            return students;
        }

        public bool Add(T model)
        {
           
            model.Id = Guid.NewGuid().ToString();
            model.CreatedBy = "Admin";
            model.Created = System.DateTime.Now;
            model.Modified = System.DateTime.Now;
            model.ModifiedBy = "Admin";
            return repository.Add(model);
        }
        public bool Add2(T model)
        {
            model.Id = Guid.NewGuid().ToString();
            model.CreatedBy = "Admin";
            model.Created = System.DateTime.Now;
            model.Modified = System.DateTime.Now;
            model.ModifiedBy = "Admin";
            return repository.Add(model);
        }
        public List<TV> Search(TR request)
        {
            var students = SearchQueryable(request);
            var list = students.ToList().ConvertAll(CreateVModelInstence);

            return list;
        }

        public static TV CreateVModelInstence(T x)
        {
            return (TV) Activator.CreateInstance(typeof(TV), x);
        }

        public TV Detail(string id)
        {
            T x = repository.GetDetail(id);
            if (x == null)
            {
                throw new ObjectNotFoundException();
            }
            var vm = CreateVModelInstence(x);
            return vm;

        }
    }

   
}
