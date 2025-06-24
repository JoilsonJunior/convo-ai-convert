
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Clock, Phone, Calendar, TrendingUp, Users, Zap, Shield, Target, ArrowRight, Play } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sua solicitação foi enviada! Nossa equipe entrará em contato em até 2 horas.");
    setFormData({ name: "", company: "", position: "", email: "", phone: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Invoicce<span className="text-slate-600">.AI</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
            AGENDAR DEMONSTRAÇÃO
          </Button>
        </div>
      </header>

      {/* 1️⃣ Hero Section - Headline + ROI */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-green-500 text-white px-4 py-2 text-sm">
            🔥 Apenas 15 implementações disponíveis este mês
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforme seus leads em<br />
            <span className="text-yellow-300">reuniões enquanto você dorme</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            IA que liga, agenda e recupera oportunidades em minutos.<br />
            <span className="font-semibold">ROI garantido: +35% de conversão em 30 dias.</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              QUERO AGENDAR UMA DEMONSTRAÇÃO
            </Button>
            <div className="flex items-center text-sm opacity-75">
              <Play className="mr-2 h-4 w-4" />
              Vídeo: Como funciona (90s)
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-sm opacity-75">Atendimento automatizado</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">48h</div>
              <div className="text-sm opacity-75">Implementação completa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">+35%</div>
              <div className="text-sm opacity-75">Aumento na conversão</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Problema - O que já tentou */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
              Você já fez <span className="text-red-600">tudo certo</span>... e mesmo assim perde vendas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: TrendingUp, title: "Investiu em tráfego", desc: "Facebook, Google, LinkedIn..." },
                { icon: Users, title: "Contratou SDRs", desc: "Treinamento, metas, processos..." },
                { icon: Target, title: "Definiu estratégias", desc: "Funil, abordagem, scripts..." },
                { icon: Clock, title: "Fez reuniões", desc: "Feedback, otimização, relatórios..." }
              ].map((item, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-red-500">
                  <CardContent className="p-0">
                    <item.icon className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                    <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-red-50 border-l-4 border-l-red-500 p-6 rounded">
              <p className="text-lg text-slate-700">
                <span className="font-bold text-red-600">Resultado:</span> O lead esfria enquanto você ainda está montando o plano de ação. 
                A venda escapa porque não há SLA rápido suficiente para capturar o momento certo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Solução - Promessa da IA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
              A solução que você precisa: <span className="text-blue-600">SLA de segundos</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "SLA de segundos", desc: "Contato imediato quando o lead está quente" },
                    { icon: Clock, title: "24h por dia, 7 dias da semana", desc: "Nunca perde oportunidade, nem fim de semana" },
                    { icon: Phone, title: "Liga, conversa e agenda", desc: "Conversação natural que converte" },
                    { icon: Shield, title: "Garantia de retorno", desc: "Do tráfego que você já investe" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Antes vs Depois</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Tempo de resposta:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 line-through">2-24h</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      <span className="text-green-600 font-bold">30s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Cobertura:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 line-through">40h/sem</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      <span className="text-green-600 font-bold">168h/sem</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Taxa de conversão:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-600 line-through">15%</span>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                      <span className="text-green-600 font-bold">50%+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Para quem é / não é */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
              Esta solução é para você?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-l-green-500">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    ✅ PERFEITO PARA VOCÊ SE:
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Já investe em marketing e precisa converter melhor
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Quer garantir retorno sem aumentar time
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Tem fluxo comercial e processo de pré-venda
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      Busca resultados rápidos e mensuráveis
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-l-red-500">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-red-600 mb-4">
                    ❌ NÃO É PARA VOCÊ SE:
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500 mt-1">❌</span>
                      Prefere manter modelo 100% manual
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500 mt-1">❌</span>
                      Aceita perder oportunidades no fim de semana
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500 mt-1">❌</span>
                      Não tem interesse em medir ROI
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-500 mt-1">❌</span>
                      Quer continuar dependendo só de humanos
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Pesquisa HubSpot + Gráfico */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-8">
              Dados que você <span className="text-red-600">não pode ignorar</span>
            </h2>
            <p className="text-center text-lg text-slate-600 mb-12">
              Pesquisa HubSpot: Como o interesse do lead diminui a cada minuto
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-slate-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-center">Taxa de Conversão por Tempo de Resposta</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-100 rounded">
                    <span className="font-medium">0-5 minutos</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-green-200 rounded-full h-4 mr-3">
                        <div className="bg-green-600 h-4 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="font-bold text-green-600">90%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-100 rounded">
                    <span className="font-medium">5-30 minutos</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-yellow-200 rounded-full h-4 mr-3">
                        <div className="bg-yellow-600 h-4 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="font-bold text-yellow-600">65%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-100 rounded">
                    <span className="font-medium">30-60 minutos</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-orange-200 rounded-full h-4 mr-3">
                        <div className="bg-orange-600 h-4 rounded-full" style={{width: '40%'}}></div>
                      </div>
                      <span className="font-bold text-orange-600">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-100 rounded">
                    <span className="font-medium">+24 horas</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-red-200 rounded-full h-4 mr-3">
                        <div className="bg-red-600 h-4 rounded-full" style={{width: '5%'}}></div>
                      </div>
                      <span className="font-bold text-red-600">5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-red-50 border-l-4 border-l-red-500 p-6 rounded mb-6">
                  <h3 className="font-bold text-red-600 text-xl mb-3">A pergunta que dói:</h3>
                  <p className="text-slate-700 text-lg">
                    Você investe para gerar leads. E deixa o melhor horário (noite, fim de semana) escapar 
                    porque ninguém liga quando o lead está mais disposto a ouvir.
                  </p>
                </div>
                <div className="bg-slate-800 text-white p-6 rounded">
                  <h3 className="font-bold text-yellow-300 text-xl mb-3">Quanto você perdeu só este mês?</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Leads gerados:</span>
                      <span className="font-bold">500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perdidos por SLA ruim:</span>
                      <span className="font-bold text-red-400">350 (70%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ticket médio:</span>
                      <span className="font-bold">R$ 2.500</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Dinheiro perdido:</span>
                      <span className="font-bold text-red-400">R$ 875.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Por que Invoicce */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Por que a Invoicce é a <span className="text-yellow-300">melhor solução</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Zap, 
                  title: "SLA Real de Segundos", 
                  desc: "Contato em até 30 segundos após o lead entrar",
                  highlight: "30s"
                },
                { 
                  icon: Users, 
                  title: "IA Humanizada", 
                  desc: "Conversação natural validada em +10.000 ligações",
                  highlight: "+10k"
                },
                { 
                  icon: Clock, 
                  title: "Cobertura Total", 
                  desc: "24/7 incluindo madrugada, fim de semana e feriados",
                  highlight: "24/7"
                },
                { 
                  icon: Target, 
                  title: "Integração CRM", 
                  desc: "Conecta com seu sistema atual sem complicação",
                  highlight: "100%"
                },
                { 
                  icon: TrendingUp, 
                  title: "Implementação Rápida", 
                  desc: "Sistema funcionando em até 48 horas",
                  highlight: "48h"
                },
                { 
                  icon: Shield, 
                  title: "Suporte Dedicado", 
                  desc: "Time especializado + dashboard em tempo real",
                  highlight: "VIP"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-300 mb-2">{item.highlight}</div>
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-blue-100">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Cases e ROI */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
              Resultados reais, comprovados
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  metric: "+35%",
                  title: "Aumento de conversão",
                  desc: "Em 30 dias de implementação",
                  company: "Energia Solar SP"
                },
                {
                  metric: "R$ 2.1M",
                  title: "Faturamento adicional",
                  desc: "Apenas nos finais de semana",
                  company: "Indústria Metalúrgica"
                },
                {
                  metric: "87%",
                  title: "Leads convertidos",
                  desc: "Vs 23% do modelo anterior",
                  company: "Saúde Corporativa"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-green-500">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{item.metric}</div>
                    <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-3">{item.desc}</p>
                    <Badge variant="outline" className="text-xs">{item.company}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-white p-8 rounded-xl border">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                📊 Dashboard Real - Performance dos Últimos 30 Dias
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">1.247</div>
                  <div className="text-sm text-slate-600">Leads contatados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">891</div>
                  <div className="text-sm text-slate-600">Reuniões agendadas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">28s</div>
                  <div className="text-sm text-slate-600">Tempo médio resposta</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">71.4%</div>
                  <div className="text-sm text-slate-600">Taxa de conversão</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Future Pacing */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Imagine seu negócio funcionando <span className="text-yellow-300">no piloto automático</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">📅 Segunda-feira, 8h da manhã:</h3>
                <p className="text-slate-300">
                  Você abre o computador e encontra 15 reuniões já agendadas para a semana. 
                  Sua IA trabalhou no fim de semana enquanto você descansava.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">🎯 Seu time comercial:</h3>
                <p className="text-slate-300">
                  Só recebe reuniões qualificadas. Sem perder tempo com lead frio. 
                  Sem cobrar SLA. Sem desperdiçar tráfego.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">💰 Seu ROI:</h3>
                <p className="text-slate-300">
                  Cada real investido em marketing agora tem retorno garantido. 
                  Leads não esfriam mais. Oportunidades não escapam.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">😴 Sua tranquilidade:</h3>
                <p className="text-slate-300">
                  Fim de semana, feriado, madrugada - sua empresa vende 24/7 
                  com a mesma qualidade e eficiência.
                </p>
              </div>
            </div>
            <p className="text-xl text-yellow-300 font-bold">
              Essa realidade está a apenas 48 horas de distância.
            </p>
          </div>
        </div>
      </section>

      {/* 9️⃣ O que o cliente recebe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
              O que você recebe ao contratar a Invoicce
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Setup Completo da IA",
                  desc: "Configuração personalizada em até 48h",
                  icon: Zap,
                  value: "R$ 15.000"
                },
                {
                  title: "Equipe Dedicada na Implementação",
                  desc: "Time especializado do início ao fim",
                  icon: Users,
                  value: "R$ 8.000"
                },
                {
                  title: "Integração Total ao CRM",
                  desc: "Conectamos com seu sistema atual",
                  icon: Target,
                  value: "R$ 5.000"
                },
                {
                  title: "Fluxos Prontos",
                  desc: "Ligação, mensagem e agendamento automatizados",
                  icon: Phone,
                  value: "R$ 12.000"
                },
                {
                  title: "Suporte VIP",
                  desc: "Atendimento prioritário + otimização contínua",
                  icon: Shield,
                  value: "R$ 6.000"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-blue-500">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                          <p className="text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-400 line-through">{item.value}</div>
                        <div className="text-green-600 font-bold">INCLUSO</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mt-8 text-center">
              <h3 className="font-bold text-green-800 text-xl mb-2">
                Valor total se contratasse separado: R$ 46.000
              </h3>
              <p className="text-green-700">
                Investimento Invoicce: <span className="font-bold text-2xl">A partir de R$ 2.500/mês</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal + Formulário */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-yellow-500 text-black px-4 py-2">
                ⚡ ÚLTIMAS 15 VAGAS DE IMPLEMENTAÇÃO EM DEZEMBRO
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Pare de perder dinheiro hoje mesmo
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Agende uma demonstração e veja como aumentar sua conversão em 35% nos próximos 30 dias
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Na demonstração você vai ver:</h3>
                <ul className="space-y-3">
                  {[
                    "Como a IA liga e agenda reuniões em tempo real",
                    "Integração completa com seu CRM atual",
                    "Dashboard com métricas e resultados",
                    "Casos reais de clientes do seu setor",
                    "Cronograma de implementação personalizado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">
                    Agende sua demonstração gratuita
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="bg-white"
                    />
                    <Input
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                      className="bg-white"
                    />
                    <Input
                      placeholder="Seu cargo"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      required
                      className="bg-white"
                    />
                    <Input
                      type="email"
                      placeholder="E-mail corporativo"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="bg-white"
                    />
                    <Input
                      type="tel"
                      placeholder="WhatsApp"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="bg-white"
                    />
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-bold">
                      QUERO AGENDAR MINHA DEMONSTRAÇÃO
                    </Button>
                  </form>
                  <p className="text-xs text-slate-600 text-center mt-4">
                    Demonstração de 30 minutos • Sem compromisso • Resposta em até 2h
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 FAQ Samurai */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12">
              Perguntas frequentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "A IA vai parecer robô e afastar o cliente?",
                  answer: "Não. Nossa conversação é natural e foi validada em mais de 10.000 ligações reais. Os clientes não conseguem distinguir da conversa humana. Temos scripts personalizados para cada setor."
                },
                {
                  question: "É caro demais para minha empresa?",
                  answer: "Pelo contrário. O investimento é menor que o salário de 1 CLT (sem contar encargos, férias, 13º) e com retorno rápido via aumento de conversão. Clientes recuperam o investimento em 30-60 dias."
                },
                {
                  question: "Se já tenho time comercial, por que preciso da IA?",
                  answer: "Para cobrir o que o humano não consegue: madrugada, fim de semana, férias, feriados. Sua equipe fica livre para focar em reuniões qualificadas, não em prospecção básica."
                },
                {
                  question: "Quanto tempo demora para ver resultados?",
                  answer: "Implementação em até 48h. Primeiros resultados em 72h. ROI positivo em 30 dias. Nossos clientes veem aumento de 35% na conversão no primeiro mês."
                },
                {
                  question: "Funciona para qualquer tipo de negócio?",
                  answer: "Funciona melhor para B2B com ticket médio a partir de R$ 2.000 e processo de vendas estruturado. Indústria, energia solar, saúde e telecom são nossos cases de maior sucesso."
                },
                {
                  question: "E se meu CRM for diferente?",
                  answer: "Integramos com qualquer CRM: HubSpot, Salesforce, Pipedrive, RD Station, ou sistema proprietário. Nossa equipe técnica cuida de toda a integração."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 border-l-4 border-l-blue-500">
                  <CardContent className="p-0">
                    <h3 className="font-bold text-slate-800 text-lg mb-3">
                      ❓ {faq.question}
                    </h3>
                    <p className="text-slate-700">
                      <span className="font-semibold text-green-600">✅</span> {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Invoicce<span className="text-slate-400">.AI</span>
            </div>
            <p className="text-slate-400 mb-8">
              A solução de IA que transforma leads em reuniões automaticamente
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-2">Implementação Express</h4>
                <p className="text-slate-400 text-sm">48h para estar funcionando</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Suporte 24/7</h4>
                <p className="text-slate-400 text-sm">Time dedicado sempre disponível</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">ROI Garantido</h4>
                <p className="text-slate-400 text-sm">+35% conversão em 30 dias</p>
              </div>
            </div>
            <Separator className="my-8" />
            <p className="text-slate-500 text-sm">
              © 2024 Invoicce.AI - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
