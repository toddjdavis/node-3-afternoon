-- create TABLE product(
--     product_id serial primary key,
--     name varchar(40),
--     description varchar(80),
--     price int,
--     image_url text
-- )

insert into product (
    name,
    description,
    price,
    image_url
) values(
    $1,
    $2,
    $3,
    $4
)