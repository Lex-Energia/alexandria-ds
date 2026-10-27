---
'@pharos-ds/core': patch
---

[feat] `Calendar`, `DateInput`, `DateRangeInput` e `DateTimeInput` formatam datas (mês do cabeçalho, rótulos dos dias, valor exibido) e leem a ordem dia/mês da digitação com o locale do `InternationalizationProvider`, não mais com o padrão do runtime. Servidor e navegador passam a formatar igual, o que elimina o erro de hidratação. Sem provider, nada muda (continua o locale do runtime). Novo hook `useFormatLocale` e parâmetro `locale` opcional em `plainDateFormat`, `formatSharedDate`, `isLocaleDayFirst` e `parseDateInput`. `Timestamp` e `PowerSearch` ainda usam o locale do runtime. Atende a issue #144 do alexandria.frontend.

@Caio-Silvestre
