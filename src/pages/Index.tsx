import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [budget, setBudget] = useState([50000]);
  const [duration, setDuration] = useState([3]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      title: "SMM Продвижение",
      description: "Адское продвижение в социальных сетях",
      price: "от 25 000₽",
      icon: "Target",
      features: ["Контент-план", "Реклама", "Аналитика"]
    },
    {
      title: "SEO Оптимизация", 
      description: "Выводим сайты в топ поисковых систем",
      price: "от 40 000₽",
      icon: "TrendingUp",
      features: ["Техническая оптимизация", "Семантическое ядро", "Линкбилдинг"]
    },
    {
      title: "Контекстная реклама",
      description: "Эффективная настройка PPC кампаний",
      price: "от 30 000₽", 
      icon: "Zap",
      features: ["Google Ads", "Яндекс.Директ", "Ретаргетинг"]
    },
    {
      title: "Email маркетинг",
      description: "Автоматизация email рассылок",
      price: "от 15 000₽",
      icon: "Mail", 
      features: ["Сегментация", "Автоворонки", "A/B тестирование"]
    }
  ];

  const portfolio = [
    { title: "Увеличение продаж на 300%", category: "E-commerce", result: "+300%" },
    { title: "Снижение CPA в 2 раза", category: "Финтех", result: "-50%" },
    { title: "Рост органического трафика", category: "SaaS", result: "+250%" },
    { title: "Повышение конверсии", category: "Недвижимость", result: "+180%" }
  ];

  const team = [
    { name: "Владислав Демонов", role: "CEO & Главный стратег", experience: "12 лет" },
    { name: "Анна Адская", role: "Head of Performance", experience: "8 лет" },
    { name: "Максим Огненный", role: "SEO Director", experience: "10 лет" },
    { name: "Елена Пламенная", role: "Creative Director", experience: "7 лет" }
  ];

  const testimonials = [
    {
      name: "Игорь Петров",
      company: "TechCorp",
      text: "Результаты превзошли все ожидания. Продажи выросли в 3 раза за полгода!",
      rating: 5
    },
    {
      name: "Мария Сидорова", 
      company: "Fashion Brand",
      text: "Профессиональный подход и отличные результаты. Рекомендую!",
      rating: 5
    }
  ];

  const calculateCost = () => {
    const baseCost = budget[0];
    const durationMultiplier = duration[0];
    const servicesCount = selectedServices.length;
    
    return baseCost * (durationMultiplier / 3) * (1 + servicesCount * 0.2);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 hellish-gradient rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-montserrat font-bold hellish-text-gradient">HELLFIRE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hellish-gradient hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(/img/a2895f58-c6d5-4fab-9806-c2ae59dd3a74.jpg)` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 border-primary text-primary">
            🔥 #1 Маркетинговое агентство адского уровня
          </Badge>
          <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-8">
            <span className="hellish-text-gradient">РАЗЖИГАЕМ</span>
            <br />
            ПРОДАЖИ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Превращаем ваш бизнес в адскую машину по генерации прибыли. 
            Гарантируем результат или возвращаем деньги.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hellish-gradient hover:opacity-90 px-8 py-6 text-lg">
              <Icon name="Rocket" size={20} className="mr-2" />
              НАЧАТЬ ПРОЕКТ
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
              АДСКИЕ УСЛУГИ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая услуга — это оружие массового поражения конкурентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-border hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 hellish-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold hellish-text-gradient mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 hellish-gradient hover:opacity-90">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
              АДСКИЕ КЕЙСЫ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold hellish-text-gradient mb-4">
                    {project.result}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {project.category}
                  </Badge>
                  <Button variant="ghost" className="group-hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
              КОМАНДА ДЕМОНОВ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты с адским опытом в digital-маркетинге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div 
                    className="w-32 h-32 rounded-full mx-auto mb-6 bg-cover bg-center border-4 border-primary"
                    style={{ backgroundImage: `url(/img/2eb20881-0e75-470e-bb21-cb1d149dc748.jpg)` }}
                  />
                  <h3 className="font-montserrat font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground">Опыт: {member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
                КАЛЬКУЛЯТОР СТОИМОСТИ
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Рассчитайте стоимость продвижения вашего бизнеса
              </p>
            </div>

            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Бюджет на маркетинг</Label>
                    <div className="mt-2">
                      <Slider
                        value={budget}
                        onValueChange={setBudget}
                        max={500000}
                        min={10000}
                        step={10000}
                        className="mb-2"
                      />
                      <div className="text-2xl font-bold hellish-text-gradient">
                        {budget[0].toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Срок работ (месяцев)</Label>
                    <div className="mt-2">
                      <Slider
                        value={duration}
                        onValueChange={setDuration}
                        max={24}
                        min={1}
                        step={1}
                        className="mb-2"
                      />
                      <div className="text-2xl font-bold hellish-text-gradient">
                        {duration[0]} мес.
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Тип бизнеса</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Выберите тип бизнеса" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="b2b">B2B услуги</SelectItem>
                        <SelectItem value="retail">Розничная торговля</SelectItem>
                        <SelectItem value="fintech">Финтех</SelectItem>
                        <SelectItem value="healthcare">Медицина</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Дополнительные услуги</Label>
                    <div className="mt-4 space-y-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`service-${index}`}
                            className="rounded border-border"
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedServices([...selectedServices, service.title]);
                              } else {
                                setSelectedServices(selectedServices.filter(s => s !== service.title));
                              }
                            }}
                          />
                          <Label htmlFor={`service-${index}`} className="text-sm">
                            {service.title}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 hellish-gradient rounded-lg text-white">
                    <h3 className="text-2xl font-bold mb-4">Итоговая стоимость:</h3>
                    <div className="text-4xl font-black mb-4">
                      {Math.round(calculateCost()).toLocaleString('ru-RU')} ₽
                    </div>
                    <p className="text-white/80 mb-4">
                      Полная стоимость проекта на {duration[0]} месяц{duration[0] > 1 ? (duration[0] < 5 ? 'а' : 'ев') : ''}
                    </p>
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      <Icon name="Calculator" size={16} className="mr-2" />
                      Получить коммерческое предложение
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
              ОТЗЫВЫ КЛИЕНТОВ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
              БЛОГ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Секреты адского маркетинга от наших экспертов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5 способов увеличить ROI в контекстной рекламе",
                excerpt: "Практические советы по оптимизации рекламных кампаний",
                date: "15 декабря 2024",
                readTime: "7 мин"
              },
              {
                title: "SMM стратегия 2025: тренды и прогнозы",
                excerpt: "Что будет актуально в продвижении соцсетей в следующем году",
                date: "12 декабря 2024",
                readTime: "10 мин"
              },
              {
                title: "SEO мифы: что действительно работает в 2024",
                excerpt: "Развенчиваем популярные заблуждения о поисковой оптимизации",
                date: "8 декабря 2024",
                readTime: "12 мин"
              }
            ].map((article, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg" />
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Читать все статьи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-montserrat font-bold hellish-text-gradient mb-6">
                СВЯЖИТЕСЬ С НАМИ
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Готовы обсудить ваш проект? Напишите нам!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 hellish-gradient rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 hellish-gradient rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">hello@hellfire-agency.ru</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 hellish-gradient rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Тверская, 10</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Мы в социальных сетях</h4>
                  <div className="flex space-x-4">
                    {['Instagram', 'Linkedin', 'Youtube', 'Twitter'].map((social) => (
                      <Button key={social} size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        {social}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="text-2xl font-montserrat font-bold mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Расскажите о вашем проекте..."
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full hellish-gradient hover:opacity-90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 hellish-gradient rounded-lg flex items-center justify-center">
                  <Icon name="Flame" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-montserrat font-bold hellish-text-gradient">HELLFIRE</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Маркетинговое агентство адского уровня
              </p>
              <div className="flex space-x-4">
                {['Instagram', 'Linkedin', 'Youtube'].map((social) => (
                  <div key={social} className="w-10 h-10 hellish-gradient rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                    <Icon name="ExternalLink" size={16} className="text-white" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">SMM продвижение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SEO оптимизация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контекстная реклама</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email маркетинг</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>hello@hellfire-agency.ru</li>
                <li>Москва, ул. Тверская, 10</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <div>© 2024 HELLFIRE Agency. Все права защищены.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;