<?php

	$recepient = "test-t7@ukr.net";
	$sitename = "Food Gurman (fran.foodgurman.ru)";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["tel"]);
	$from = trim($_POST["from"]);
	$email = trim($_POST["email"]);
	$message = "Имя: $name \nТелефон: $tel \nEmail: $email \nЗаявка с раздела: $from";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
