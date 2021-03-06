# Создание системы типов для получения отклика сервера

Коллеги, работающие над сервером предоставили вам сведения о его поведении. Обмен будет производится в режиме сообщений. Клиент отправляет запрос на сервер и получает ответ. В запросе могут быть указаны важные поля сообщения. Часть полей может отсутствовать. В ответ на ваш запрос к серверу вы можете получить подтверждение об успешном выполнении запроса, либо сообщение об ошибке.

В случае успешного завершения запроса вы получаете сведения с дополнительными значениями, а именно - регистрационным номером запроса, датой регистрации. Кроме того, сервер заполнит все незаполненные поля. При получении успешного отклика от сервера все поля сообщения становятся заполненными.

В случае ошибки в данных запроса вы получаете список полей, в отношении которых вам (или вашему пользователю) требуется выполнить корректировку. Причина ошибки для каждого поля может быть своя. Кроме индивидуальных сообщений к каждому полю вы получите общий статус.

Вам поручена разработка системы типов, которая бы позволила организовать описанный обмен.

Следует учесть, что набор полей может быть определен в процессе сопровождения продукта и должен быть оформлен в общем виде.

## Задание

Определить интерфейсы `ApiRequest<TData>`, `ApiSuccess<TData>`, `ApiError<TData>` и показать вариант организации обмена на примере резервирования столика в ресторане (`TableReservation`)

## Пояснения к решению

Мы использовали интерфейсы с полем type и типом - специальным литеральным строковым типов. Такой подход позволил нам поручить TypeScript-у утвердить тип ApiSuccess или ApiError после дискриминации значения по этому полю.
