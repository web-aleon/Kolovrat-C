<?php

	$recepient = "test-t7@ukr.net";
	$sitename = "Коловрат-С (Бытовые услуги)";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["tel"]);
	$from = trim($_POST["from"]);
	$email = trim($_POST["email"]);

	if ($email) {
		$email = "\nEmail: " . $email;
	}

	$message = "Имя: $name \nТелефон: $phone" . $email . "\nЗаявка с раздела: $from";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
