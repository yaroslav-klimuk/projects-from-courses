<!DOCTYPE html><html lang="ru"><head><link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"><meta charset="UTF-8"><title>МорТранс</title><link rel="icon" type="img/favicon.ico" href="img/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="css/helvetica.css"><link rel="stylesheet" href="css/header.css"><body><?php include ('header.php');?><?php include ('sidebar.php');?><div class="container"><div class="content booking-content"><form action="mailer/smart.php" method="POST" id="form"class="form"><h2 class="booking-title">Забронировать билет</h2><div class="place"><div class="place-text__small">Выберите направление</div><select name="whence-b" id="whence" size="1" class="booking-select" required><option value="">Откуда</option><option value="Санкт-Петербург">Санкт-Петербург</option><option value="Рига">Рига</option></select><select name="where-b" id="where" class="booking-select" required><option value="">Куда</option><option value="Рига">Рига</option><option value="Санкт-Петербург">Санкт-Петербург</option></select></div><div class="booking-date"><div class="place-text__small">Дата поездки</div><!-- <select name="date-b" id="date" size="1" class="booking-select date-select"><option value="30.03.2018">30.03.2018</option></select> --><input type="date" name="date-b" id="date" class="booking-select date-select" required></div><div class="price"><div class="place-text__small">Итоговая сумма за билет</div><div class="price-text">290 рублей</div></div><div class="booking-button"><input class="booking-btn" onclick="yaCounter48973400.reachGoal('booking-btn'); return true;" type="submit" value="Забронировать билет"><div class="booking-info">Выкуп осуществляется в здании вокзала.Бронь закрывается за 30 минут до отправления.</div></div></form></div></div><?php include ('footer.php');?><link rel="stylesheet" href="css/fontawesome-all.min.css"><link rel="stylesheet" href="css/sidebar.css"><link rel="stylesheet" href="css/main-content.css"><link rel="stylesheet" href="css/booking.css"><link rel="stylesheet" href="css/footer.css"><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script><script>
	jQuery(function($){
		$("form").trigger("reset");
	});
</script><script>function SearchMobile(){var a = document.getElementById('mobile-search__input');if (a.style.display == 'none') {a.style.display = 'block';}else a.style.display = 'none';}</script><!-- Yandex.Metrika counter --> <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48973400 = new Ya.Metrika({ id:48973400, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/48973400" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter --></body></html>