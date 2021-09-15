<template>
  <div>
    <strategy-hero-section />
    <v-container>
      <p class="mt-12 mb-2">
        We are facing an era of exponential change. The convergence of
        technologies has changed the way consumers and businesses interact
      </p>
      <p>
        Data-driven insights allow us to better predict and interact with
        customers faster and more creatively. Today’s consumers are always
        connected, time starved and experience driven – while demanding greater
        transparency and sustainability.
      </p>
      <p>
        Against this background, we are focused on speed, innovation and
        digitalization of the supply chain. Our vision is simple but bold: we
        aspire to create the supply chain of the future to help our customers
        navigate the digital economy.
      </p>
      <v-row>
        <v-col cols="12" md="8">
          <div class="display-1 mt-12 mb-4">Speed</div>
          <p>
            Speed is the first thing our customers demand from us to stay
            competitive. To help them succeed, we are focused on strategic
            investments to leverage new technologies, optimize processes and
            connect-the-dots of our supply chain.
          </p>
          <p>
            Speed is about better serving our global brand and retail customers
            enabling them to reduce production lead times and increase
            speed-to-market, making decisions closer to time to market, enabling
            them to create on-trend products that delight their end-consumers
            and sell at full prices with lower mark-downs.
          </p>
          <p>
            Our ability to facilitate speed and capture its benefits is a major
            part of the transformation of our business. We are spearheading the
            use of technology to create an agile workforce that can operate
            efficiently, and driving innovation through projects and new ways of
            working. Data-driven insights, process optimization, transparency
            improvements and workspace reorganization are key.
          </p>
          <p>We want to enable speed in the supply chain like never before.</p>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-none d-sm-flex align-center justify-center"
        >
          <v-icon class="icon" color="green accent-4">mdi-speedometer</v-icon>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col
          cols="12"
          md="4"
          class="d-none d-sm-flex align-center justify-center"
        >
          <v-icon class="icon" color="blue accent-3">mdi-axis-arrow</v-icon>
        </v-col>
        <v-col cols="12" md="8">
          <div class="display-1 mt-12 mb-4">Innovations</div>
          <p>
            Mobile-enabled, mass-customized products and services are the new
            norm. Brands and retailers are challenged to respond rapidly to
            changes in consumer expectations.
          </p>
          <p>
            Through customer collaborations, crowdsourcing ideas and technology
            partnerships, we’re developing new products and solutions to help
            our customers meet these expectations.
          </p>
          <p>
            We sit at the center of an increasingly digitalized supply chain.
            Our access to data across the supply chain as well as new ways of
            working with retailers and suppliers creates an opportunity to
            explore new business models with traditional and non-traditional
            partners.
          </p>
          <p>
            To innovate at today’s speed-oriented pace requires openness and
            humility. We’re using open innovation, looking inside and out, to
            find new ideas and collaborating with partners who have the
            capabilities, knowledge and platforms to help. We’re taking
            advantage of specialization and multiple points of view and
            empowering our people to be innovators, connecting them with other
            communities of innovators. We’re even redesigning our work spaces to
            become more flexible to promote sharing, fluid project management
            and a flat structure for all colleagues across our global network.
          </p>
          <p>
            Success for us is the ability to innovate with agility, while
            creating new businesses and customer success along the way.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col cols="12" md="8">
          <div class="display-1 mt-12 mb-4">Digitalization</div>
          <p>
            Digitalization is about creating the future of end-to-end digital
            supply chains. It means transforming all elements of the supply
            chain and analyzing the data to provide valuable insights and
            creating an ecosystem that makes us unique for our customers.
          </p>
          <p>
            As consumers become ever more digital, our industry’s supply chains
            must be upgraded. We are leading the effort to digitalize our global
            supply chain, resulting in an end-to-end stream of synchronized
            supply chain data. Advanced analytics will allow us to improve
            speed, cost, lead time, working capital, inventory, sustainability
            and traceability for all the partners in our ecosystem.
          </p>
          <p>
            The supply chain of the future is a multidimensional world where
            brands, retailers and suppliers, can seamlessly connect to an
            ecosystem of digital services and data insights that was never
            possible until now. We want to deliver predictive analytics to
            enhance the business performance of our customers and partners. Li &
            Fung’s integrated digital platform has been built to capture and
            share data across the entire value chain, and the result will be a
            platform designed to enable smarter, faster and more effective
            decisions.
          </p>
          <p>This is the future of supply chains.</p>
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="d-none d-sm-flex align-center justify-center"
        >
          <v-icon class="icon" color="amber accent-3">mdi-star-shooting</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StrategyHeroSection from '~/components/our-strategy/StrategyHeroSection.vue'
export default {
  components: { StrategyHeroSection },
}
</script>

<style lang="scss" scoped>
.title,
.display-1 {
  font-family: 'Poppins', sans-serif !important;
}
.display-1 {
  font-weight: 600;
}
.icon {
  font-size: 15em;
}
</style>
