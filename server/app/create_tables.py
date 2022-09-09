from sqlalchemy import create_engine, Column ,Table,MetaData,Integer,String

engine = create_engine('sqlite:///data.sqlite')

metadata = MetaData()

users = Table("users" ,metadata,
    Column("user_id" , Integer , primary_key = True),
    Column("user_name" , String(40)),
    Column("password" , String(40))
)

metadata.create_all(engine)